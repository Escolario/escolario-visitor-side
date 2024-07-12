import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { IoPencilSharp } from "react-icons/io5";

function ArticleSoloView() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  if (!id) {
    return;
  }

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

  const [parsedContent, setParsedContent] = useState();

  // DATE FORMATTING

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const docRef = doc(db, "articles", id);
        const docSnapshot = await getDoc(docRef);
        const parser = new DOMParser();
        const body = docSnapshot.data().body;
        const content = parser.parseFromString(body, "text/html");
        setParsedContent(content.body.innerHTML);

        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();

          // DATE FORMATTING
          const dateVal =
            docData.datePosted != "" ? docData.datePosted : docData.dateCreated;
          const date = new Date(
            dateVal.seconds * 1000 + (dateVal.nanoseconds || 0) / 1000000,
          );
          const postDate = `${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()};`;

          const postTime = `${date.getHours() % 12 ? date.getHours() % 12 : 12}:${
            date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
          } ${date.getHours() >= 12 ? "PM" : "AM"}`;

          docData.datePosted = `${postDate} ${postTime}`;

          setArticle(docData); // Assuming setArticle is a state setter function
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDoc();
  }, [id]);

  return (
    <div>
      <div className="mx-auto text-center text-[25px] font-semibold md:text-[1.50rem] lg:text-[2rem] xl:text-[2.35rem]">
        {article.title}
      </div>
      <div className="mx-auto flex w-3/4 flex-col rounded-lg">
        <img
          className=" mx-auto mb-2 mt-1 h-[40rem] w-full rounded-[5px] p-2"
          src={article.image}
          alt=""
        />
        <div className=" mx-3 mt-3 text-justify md:text-[2rem] lg:text-[1.50rem] xl:text-[2.35rem]">
          <div
            dangerouslySetInnerHTML={{
              __html: parsedContent,
            }}
            className="article-body"
          />
        </div>
        <div className="mt-7 flex flex-col items-start rounded-[5px] bg-black py-5 text-white">
          <div className="grid grid-cols-2 px-5">
            <div className="flex flex-col gap-1">
              <h1 className="flex flex-row items-center gap-2">
                <IoPencilSharp /> Written By
              </h1>
              <h1 className="mx-[-5rem] ml-[-0.2rem] flex flex-row  items-center gap-2 font-semibold ">
                {" "}
                <IoPersonSharp />
                {article.author}{" "}
              </h1>
              <p className="mx-[-5rem] ml-[-0.2rem] flex flex-row items-center gap-2">
                {" "}
                <IoTimeSharp /> {article.datePosted}
              </p>
            </div>
          </div>
        </div>
        <button className="mb-2 mt-12 flex flex-col items-center rounded-[5px] bg-brand-blue p-3 font-bold text-white md:mx-[10rem] lg:mx-[20rem]">
          <Link to="/articles-main" className="text-white">
            Back to News & Articles
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ArticleSoloView;
