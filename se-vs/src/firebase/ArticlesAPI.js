// ArticlesAPI.js
import { db } from "../firebase/firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export async function fetchPostedArticles() {
  try {
    const colRef = collection(db, "articles");
    const q = query(colRef, where("isPostApproved", "==", true));
    const postedArticlesSnapshot = await getDocs(q);
    // Extract admin data from the snapshot
    const articlesData = [];

    postedArticlesSnapshot.forEach((doc) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // DATE FORMATTING
      const dateVal =
        doc.data().datePosted != ""
          ? doc.data().datePosted
          : doc.data().dateCreated;
      const date = new Date(
        dateVal.seconds * 1000 + (dateVal.nanoseconds || 0) / 1000000,
      );
      const postDate = `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} `;

      const postTime = `${date.getHours() % 12 ? date.getHours() % 12 : 12}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      } ${date.getHours() >= 12 ? "PM" : "AM"}`;

      // BODY FORMATTING
      var body = new DOMParser().parseFromString(doc.data().body, "text/html");

      articlesData.push({
        data: {
          ...doc.data(),
          datePosted: `${postDate} ${postTime}`,
          parsedBody: body.documentElement.textContent,
        },
        id: doc.id,
      });
    });
    return articlesData;
  } catch (error) {
    console.error("Error fetching login credentials", error);
    throw error;
  }
}

export async function fetchArticleID() {
  try {
    const colRef = collection(db, "articles");
    const q = query(colRef, where("isPostApproved", "==", true));
    const postedArticlesSnapshot = await getDocs(q);

    // Extract article IDs from the snapshot
    const articleIds = postedArticlesSnapshot.docs.map((doc) => doc.id);

    return articleIds;
  } catch (error) {
    console.error("Error fetching article IDs:", error);
    throw error;
  }
}

export async function fetchArticleById(articleId) {
  try {
    const articleRef = doc(db, "articles", articleId); // Reference to the article document
    const articleSnapshot = await getDoc(articleRef); // Fetch the article document

    if (articleSnapshot.exists()) {
      // Check if the article document exists
      return { id: articleSnapshot.id, data: articleSnapshot.data() }; // Return the article data
    } else {
      throw new Error("Article not found"); // Throw an error if the article document does not exist
    }
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
}

export async function fetchHomeArticles(limit) {
  try {
    const articlesRef = collection(db, "articles");
    const queryRef = query(
      articlesRef,
      where("isPostApproved", "==", true),
      where("isArchived", "==", false),
    );
    const querySnapshot = await getDocs(queryRef);

    const articlesData = [];

    const recentArticles = [];
    let dateToUse;

    querySnapshot.forEach((doc) => {
      dateToUse = doc.data().datePosted;
      recentArticles.push({
        data: doc.data(),
        id: doc.id,
        dateToUse,
      });
    });

    recentArticles.sort((a, b) => {
      const dateA = a.dateToUse ? a.dateToUse.toMillis() : 0;
      const dateB = b.dateToUse ? b.dateToUse.toMillis() : 0;
      return dateB - dateA;
    });

    recentArticles.forEach((doc, index) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // DATE FORMATTING
      const dateVal =
        doc.datePosted != "" ? doc.data.datePosted : doc.data.dateCreated;
      const date = new Date(
        dateVal.seconds * 1000 + (dateVal.nanoseconds || 0) / 1000000,
      );
      const postDate = `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} `;

      const postTime = `${date.getHours() % 12 ? date.getHours() % 12 : 12}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      } ${date.getHours() >= 12 ? "PM" : "AM"}`;

      // BODY FORMATTING
      var body = new DOMParser().parseFromString(doc.data.body, "text/html");

      if (!limit || (limit && index < limit)) {
        articlesData.push({
          data: {
            ...doc,
            datePosted: `${postDate} ${postTime}`,
            parsedBody: body.documentElement.textContent,
          },
          id: doc.id,
        });
      }
    });

    console.log(articlesData);
    return articlesData;
  } catch (error) {
    console.error("Error fetching latest articles:", error);
    throw error;
  }
}
