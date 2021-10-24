import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../Context";

export default function Profile() {
    const history = useHistory();
    const { user } = useContext(Context);
    useEffect(() => !user && history.push("/"), [ user, history ]);

    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    );
};