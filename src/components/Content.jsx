const Content = ({ collapsedLabel }) => {
    return (
      <div className={ collapsedLabel ? "content" : "content show"}>
          <img src="https://loremflickr.com/320/240" />
      </div>
    )
}

export default Content
