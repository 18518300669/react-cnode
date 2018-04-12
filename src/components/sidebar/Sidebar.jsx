import React, { Component } from 'react'
import "./sidebar.scss"
import { observer, inject } from 'mobx-react'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'


@inject(stores => stores)
@observer class Sidebar extends Component {

    render () {
        return (
            <aside className="sidebar">
                {/* 个人信息 */}
                <div className="personal-information">
                {
                    this.props.from !== 'topic' ?
                    (
                    this.props.store.isLogin ?
                    <div>
                        <div className="top user-select-none">个人信息</div>
                        <div className="info user-select-none">
                            <Link to={`/user/${this.props.store.userInfo.loginname}`}>
                                <img src={this.props.store.userInfo.avatar_url} alt="头像" />
                            </Link>
                            <Link className="nickname" to={`/user/${this.props.store.userInfo.loginname}`}>{ this.props.store.userInfo.loginname }</Link>
                        </div>
                        <div className="publish-topic">
                            <Link to="/release/create">发布话题</Link>
                        </div>
                    </div>
                    :
                    <div className="tourist-box">
                        <div className="cnode">CNode：Node.js专业中文社区</div>
                        <div className="tourist">
                            <span>当前是游客状态，您可以 </span>
                            <Link to="/login">登录</Link>
                        </div>
                    </div>
                    )
                    :
                    <div>
                        <div className="top user-select-none">作者</div>
                        <div className="info user-select-none">
                            <Link to={`/user/${this.props.author.loginname}`}>
                                <img src={this.props.author.avatar_url} alt="头像" />
                            </Link>
                            <Link to={`/user/${this.props.author.loginname}`}>
                                <em className="nickname">{ this.props.author.loginname }</em>
                            </Link>
                        </div>
                    </div>
                }
                </div>

                <div className="pay pointer-events-none">
                    <div>岁月风动花千树，又是人间四月天.</div>
                    <Carousel autoplay>
                        <div>
                            <img src={require('../../assets/images/NO1.jpg')} alt="臭美" />
                        </div>
                        <div>
                            <img src={require('../../assets/images/not-match.gif')} alt="大傻" />
                        </div>
                    </Carousel>
                </div>
                {/* 二维码 */}
                <div className="scann-qrcode">
                    <div className="scann-qrcode-title">官方手机端二维码</div>
                    <img src={require('../../assets/images/Bitcoin-Qt.jpg')} alt="官方手机端二维码" />
                </div>
            </aside>
        );
    }
}



export default Sidebar;
