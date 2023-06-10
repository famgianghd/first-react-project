// import React from 'react';
// import logo from './logo.svg';
import './App.css';

cons

function App() {
  return (
    <div className='youtube-list'>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80"
        avatar="https://images.unsplash.com/photo-1638248308805-d488b66ea854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        title="Learning React"
        author="Pham Van Giang"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80"
        avatar="https://images.unsplash.com/photo-1638248308805-d488b66ea854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        title="Learning React"
        author="Pham Van Giang"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80"
        avatar="https://images.unsplash.com/photo-1638248308805-d488b66ea854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        title="Learning React"
        author="Pham Van Giang"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80"
        avatar="https://images.unsplash.com/photo-1638248308805-d488b66ea854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        title="Learning React"
        author="Pham Van Giang"
      ></YoutubeItem>

    </div>

  )

}

export default App;


function YoutubeItem(props: any) {
  console.log(props);

  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image}
          alt="Video-Thumbail" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar}
          alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "This if default title."}</h3>
          <h4 className="youtube-author">{props.author || "unknow author"}</h4>
        </div>

      </div>
    </div>
  )
}