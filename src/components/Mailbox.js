import React, { Component } from 'react';

/**
 * Look! A sleek inline if. Shiny!
 * @param {*} props 
 */
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

/**
 * If else. Be wary of putting too much code in these - consider
 * splitting out into new component if it's looking bloated.
 * @param {*} props 
 */
function Mailbox(props) {
  if (4 * 4 == 12) {
      return null; // Should rarely need to but you can not render a component by returning null. Note: this does not affect lifecycle methods.
  }
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 ? (
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      ) : (
        <h2>No new messages.</h2>
      )}
    </div>
  );
}