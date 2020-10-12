import PropTypes from 'prop-types'
import { createMedia } from '@artsy/fresnel'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'


const {Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class HeaderTemplate extends Component {
  constructor(props){
    super(props)
    this.state = {
      banerInformation:{
        title:"",
        subTitle:"",
      },
      currentFocusCategory:0,
      fixed:false,
    }
  }
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  movePage = (currentPage)=>{
    this.setState({
      currentFocusCategory:currentPage,
    })
    if(currentPage === 3){

    }
  }
  render() {
    const { children, mobile } = this.props
    const { fixed } = this.state
    //페이지 전체 렌더링
    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em',backgroundImage:'url("https://www.medigatenews.com/file/news/139834")' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                {/* category focus는 페이지를 리디렉션할 때 state가 변경되기 때문에 서버에서 처리하는 방향으로. */}
                <Link 
                to="/" 
                style={null}> 
                  <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 0 ? true : false} onClick={()=>this.movePage(0)}>Home</Menu.Item>
                </Link>
                
                <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 1 ? true : false} onClick={()=>this.movePage(1)}>Notification</Menu.Item>
                <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 2 ? true : false} onClick={()=>this.movePage(2)}>MRI & X-RAY </Menu.Item>
                
                <Link 
                to="/reservation" 
                style={null}> 
                  <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 3 ? true : false} onClick={()=>this.movePage(3)}>
                  Reaservation
                  </Menu.Item>
                </Link>
                <Menu.Item position='right'>
                  
                    <Link to="/login" style={null}>
                        <Button as='a' inverted={!fixed}>
                            Log in
                        </Button>
                    </Link>
                  
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Container text>
              <Header
                as='h1'
                content={this.props.banerInformation.title}
                inverted
                style={{
                  fontSize: mobile ? '2em' : '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: mobile ? '1.5em' : '3em',
                }}
              />
              <Header
                as='h2'
                content={this.props.banerInformation.subTitle}
                inverted
                style={{
                  fontSize: mobile ? '1.5em' : '1.7em',
                  fontWeight: 'normal',
                  marginTop: mobile ? '0.5em' : '1.5em',
                }}
              />
              {this.props.banerInformation.isMain ? 
                <Button primary size='huge'>
                예약하기
                <Icon name='right arrow' />
              </Button>
              :
              <></>
              }
                
                

            </Container>
          </Segment>
        </Visibility>
        
        {children}
      </Media>
    )
  }
}

HeaderTemplate.propTypes = {
  children: PropTypes.node,
}

  
  
export default HeaderTemplate;