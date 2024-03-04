const Content = ({ expandedLabel }) => {
    return (
      <div className={ expandedLabel ? "content show" : "content"}>
          <img src="https://loremflickr.com/320/240" />
      </div>
    )
}

export default Content
