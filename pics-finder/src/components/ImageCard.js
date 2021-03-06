import React from 'react'


class ImageCard extends React.Component{

  constructor(props){
    super(props)
    this.imageRef=React.createRef();
    this.state={spans:0};

  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
    
  }
  setSpans=()=>{
    const height=this.imageRef.current.clientHeight

    const spans=Math.ceil(height/150+1)
    this.setState({spans:spans})
    // {gridRowEnd:`span ${this.state.spans}`}
  }

  render(){
    const {description, urls}=this.props.image
    return (
    <div > 
    <img ref={this.imageRef} alt={description} 
    src={urls.regular} />
    </div>
    )
  }
}

export default ImageCard;