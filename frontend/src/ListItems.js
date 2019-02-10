import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ListItems.css';


class ListItems extends React.Component{
    render(){
        return (
                <Card className="container" onClick={() => this.redirect()}>
            <CardActionArea >
                <div className="containpic" >
              <CardMedia 
                className="imageholder"
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={this.props.recipes.thumbnail}
                title="Contemplative Reptile"
              />
              <h1 className="centered">{this.props.recipes.title}</h1>
              </div>
            </CardActionArea>
          </Card>
        );
    }

    redirect(){
        document.location.href = this.props.recipes.href;
        //console.log('test');
        //this.props.history.push(this.props.recipes.href);
    }
}

export default ListItems;
