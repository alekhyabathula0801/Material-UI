import React, { Component } from 'react';

class UserList extends Component {
    state = {
        usersData: [
            {
                name: "christina woods",
                email: "wood@company.com",
                status: "Active",
                role: "User",
                lastLogin: "2d ago",
                permission: "Valid",
                options: "..."
            },
            {
                name: "vox",
                email: "fox@company.com",
                status: "Inactive",
                role: "User",
                lastLogin: "1d ago",
                permission: "Valid",
                options: "..."
            }
        ]
    }

    componentDidMount() {
        console.log("User list shown");
    }


    componentWillUnmount() {
        console.log("User list is unmounted");
    }

    render() {
        var list = this.state.usersData.map(row => {
            return <tr>
                {
                    Object.values(row).map(rowContent => {
                        return <td>{rowContent}</td>
                    })
                }
            </tr>
        }
        );
        var tableHeading = ["Name", "Email", "Status", "Role", "Last Login", "Permission", ""]
        var heading = tableHeading.map(content =>
            <th>{content}</th>
        )
        return (
            <div id="table-div">
                <table id="userTable">
                    <thead><tr>{heading}</tr></thead>
                    <tbody id="table-body">{list}</tbody>
                </table>
            </div>
        );
    }
}

export default UserList;