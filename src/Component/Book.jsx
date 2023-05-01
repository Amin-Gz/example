import { useParams } from "react-router-dom";
import { getBook } from "../data/data";
const Book = () => {
  const params = useParams();
  const book = getBook(parseInt(params.bookId));
  if (book) {
    return (
      <main className="py-10 ">
        <h2 className="text-3xl">نام کتاب:{`${book.name} تومان`}</h2>
        <h3 className="text-xl my-5 ">قیمت کل:{`${book.amount}تومان`}</h3>
        <h5 className="text-md">تاریخ انتشار:{`${book.due}`}</h5>
        <button class="mt-6 bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
          حذف کتاب
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <h2 className="text-center text-xl">کتابی یافت نشد</h2>
      </main>
    );
  }
};
export default Book;
