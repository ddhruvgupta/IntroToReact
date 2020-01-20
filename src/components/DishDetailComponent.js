import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,
CardTitle} from 'reactstrap';



function RenderComments({comments}){
  const c = comments.map((comment)=>{
    return(
      <li className="list-unstyled" key={comment.id}>
      {comment.comment}
      <br /><br />
       -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
      <br /><br />
      </li>
    )
  });

  return c;
}

  function RenderDish({dish}){
    if(dish!= null){
      return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
              </div>

              <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                      <CardTitle>Comments</CardTitle>
                    <RenderComments comments={dish.comments} />
                    </CardBody>
                </Card>
                </div>
          </div>
            );
    }else{
      return(<div> </div>);
    }
  }


const DishDetail = (props) => {
return (
    <div className="container">

            <RenderDish dish={props.dish} />

    </div>
);

    }

export default DishDetail;
