import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// create campsiteinfo class component
class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }

    // render and pass in campsite object
    renderCampsite(campsite) {
        return(
            <div className="col-mid-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    // render in comments
    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                            return (
                                <div>
                                    <p>{comment.text}</p>
                                    <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            );   
                        }
                    )
                }
                </div>
            )
        }

        return (
                <div>

                </div>
        )
    }

    render () {
            if (this.props.campsite) {
                    return (
                        <div className="row">
                            {this.renderCampsite(this.props.campsite)}
                            {this.renderComments(this.props.campsite.comments)}
                        </div>
                    );
            } else {
                return (
                    <div>

                    </div>
                );
            }
       }
}

export default CampsiteInfo;