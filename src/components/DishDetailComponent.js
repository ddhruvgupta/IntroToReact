import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,
CardTitle} from 'reactstrap';

class DishDetail extends Component{

  constructor(props){
    super(props);

  }

renderComments(comments){
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

  renderDish(dish){
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
                      {this.renderComments(dish.comments)}
                    </CardBody>
                </Card>
                </div>
              </div>
            );
    }else{
      return(<div> </div>);
    }
  }


render(){

const r = this.renderDish(this.props.dish2);
return(r);

    }
}

export default DishDetail;
