import React from 'react';

/*
    Q: Why do we use a stateless component?
    A: It’s a good practice to limit the number of class-based (stateful) components since they can manipulate state
       and are, thus, less predictable. If you just need to render data (like in the above case), then use a functional
       (state-less) component.

       http://lucybain.com/blog/2016/react-state-vs-pros/
 */
const UsersList = (props) => {
    return (
        <div>
            {
                props.users.map((user) => {
                    return (
                        <h4 key={user.id} className="well">{user.username}</h4>
                    )
                })
            }
        </div>
    )
};

export default UsersList;