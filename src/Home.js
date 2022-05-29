import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



export default function Home() {


  const [postsList, setPostsList] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [postDetail, setPostDetail] = useState({
    title: null,
    body: null,
  })

  const handleClose = () => setModalShow(false);

  useEffect(() => {

    fetch('https://student-json-api.lidemy.me/posts',)
      .then(res => res.json())
      .then(data => {
        setPostsList(data)
      })

  }, [])

  return (
    <div className="container">
      <div>
        <Modal
          show={modalShow}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{postDetail.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{postDetail.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {
        postsList.map(currentPost => (

          <div key={currentPost.id} className="card" style={{ margin: "20px 0" }}>
            <h5 className="card-header">{currentPost.title}</h5>
            <div className="card-body">
              <p className="card-text multiline-ellipsis" >{currentPost.body}</p>

              <Button variant="primary" onClick={
                () => {
                  setModalShow(true)
                  setPostDetail(currentPost)
                }
              }>
                Detail
              </Button>
            </div>
          </div>
        ))
      }

    </div>
  )
}
