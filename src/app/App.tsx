import avatarBotImg from "@public/images/avatar-bot.svg";

const App = () => (
  <div className="chat-page">
    <div className="chat-page-container">
      <div className="logo-block">
        <h1 className="title">bot Chat</h1>
        <h1 className="subtitle">AI-based service</h1>
      </div>
      <div className="window-chat">
        <div className="chat">
          <div className="message message-bot">
            <div className="avatar">
              <img src={avatarBotImg} alt="" className="button-send-img" />
            </div>
            <div className="message-text ">
              Hello! I’m BotHub, AI-based bot designed to answer all your questions.
              <span className="cursor"></span>
            </div>
          </div>
          <div className="message">
            <div className="avatar">
              <img src={avatarBotImg} alt="" className="button-send-img" />
            </div>
            <div className="message-text">Hello. help me to solve my math test</div>
          </div>
        </div>
        <div className="input-block">
          <input type="text" placeholder="Start typing here..." className="input" />
          <button className="button-send" onClick={() => {}} type="submit">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#007AFE" />
              <path
                d="M30.875 19.5917L12.5417 10.425C12.398 10.3532 12.2366 10.3244 12.0769 10.3421C11.9172 10.3598 11.7661 10.4234 11.6417 10.525C11.5229 10.6246 11.4342 10.7553 11.3856 10.9026C11.337 11.0498 11.3305 11.2076 11.3667 11.3583L13.575 19.5H23V21.1667H13.575L11.3334 29.2833C11.2994 29.4092 11.2954 29.5413 11.3218 29.669C11.3481 29.7967 11.4041 29.9164 11.4852 30.0186C11.5662 30.1207 11.6701 30.2024 11.7885 30.257C11.9068 30.3117 12.0364 30.3379 12.1667 30.3333C12.2971 30.3326 12.4256 30.3012 12.5417 30.2417L30.875 21.075C31.0115 21.0051 31.1261 20.8988 31.2061 20.768C31.2861 20.6371 31.3284 20.4867 31.3284 20.3333C31.3284 20.18 31.2861 20.0296 31.2061 19.8987C31.1261 19.7679 31.0115 19.6616 30.875 19.5917Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default App;
