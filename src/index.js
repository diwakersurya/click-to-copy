import React, { Component } from "react";
export default class Copyable extends Component {
  copyToClipboard(index) {
    let refElem = this["child-" + index];
    if (refElem) {
      let valueToCopy = refElem.title || refElem.innerText || "";
      if (valueToCopy) {
        /**create a fake textarea so that we can place text inside it
         * and call select api on it because label and h1 tags dont
         * support select() operation/method. after setting the text to
         * clipboard, remove the created textArea element.
         */
        var temp = document.createElement("textarea");
        document.body.appendChild(temp);
        temp.value = refElem.title || refElem.innerText || "";
        temp.select();
        //copy content to clipboard
        document.execCommand("copy");
        //remove temp textarea from html
        document.body.removeChild(temp);
      }
    }
  }
  render() {
    let index = 0;
    let children = React.Children.map(this.props.children, child => {
      index += 1;
      let childRefName = "child-" + index;
      return React.cloneElement(child, {
        onClick: this.copyToClipboard.bind(this, index),
        ref: ref => (this[childRefName] = ref),
        className: (child.props.className || "") + " u-copyable"
      });
    });
    return <div> {children}</div>;
  }
}
