import "./page.scss";
import book1 from "./../../img/book-1.jpg";
import book2 from "./../../img/book-2.jpg";
import book3 from "./../../img/book-3.jpg";
import book4 from "./../../img/book-4.jpg";
import book5 from "./../../img/book-5.jpg";
import Book from "../book/book";

function Page({ pageTitle }) {
 
  return (
    <div id="page">
      <h1>{pageTitle}</h1>

      {/* start shelf 1 */}
      <div className="shelf">
        <h2 className="shelf-title">Fantasy</h2>
        <div className="shelf-list">
          
          <Book 
          image = {book1} 
          title = "Don't Make Me Think" 
          author = "Steve Krug" 
          year ='2000' 
          rating = '4.5'
          />
          <Book image = {book2} 
          title = "The Design2" 
          author = "2 Don Norman" 
          year ='1988' 
          rating = '3.5'
          />
          <Book image = {book3} 
          title = "Sprint: How to Solve" 
          author = "Jake Knapp" 
          year ='2000' 
          rating = '2.5'
          />
          
        </div>
      </div>
      {/* end shelf 1 */}

      {/* start shelf 2 */}
      <div className="shelf">
        <h2 className="shelf-title">Programming</h2>
        <div className="shelf-list">
        <Book image = {book4} 
          title = "Learn UX" 
          author = "Jeff Gothelf" 
          year ='2016' 
          rating = '2.5'
          />

          <Book image = {book5} 
          title = "The Road to React" 
          author = "Steve Krug" 
          year ='2000' 
          rating = '5.0'
          />
        
          
        </div>
      </div>
      {/* end shelf 2 */}

      
    </div>
  );
}

export default Page;
