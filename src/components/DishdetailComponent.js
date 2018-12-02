import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';

// Dishdetail is implemented as a functional (stateless) component
class DishDetail extends Component {

  render() {
    // If props was passed
    if (Object.keys(this.props).length > 0) {

      const comments = this.props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.comment}</div>
            <div>
                {'-- ' + comment.author + ', ' + moment(comment.date).format('MMM DD, YYYY')}
            </div>
            <br/>
          </div>
        );
      })

      return(
        <div className="row">
          <div className="col-12 col-md-5 m-1 col-xs-12 col-sm-12">
            <Card>
              <CardImg top src={this.props.image} alt={this.props.name} />
              <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>{this.props.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1 col-xs-12 col-sm-12">
              <h4>Comments</h4>
              {comments}
          </div>
        </div>
      );
    } else { // Empty props
      return(
        <div></div>
      )
    }
  }
}

export default DishDetail;
