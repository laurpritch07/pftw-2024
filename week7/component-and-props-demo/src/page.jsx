export function Page(props) {
    return (
        <div>
            <div id="masthead">Ken&apos;s cool website of doom</div>
            {
                props.children
            }
        </div>
    );
}