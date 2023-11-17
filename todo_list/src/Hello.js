import './Hello.css';

function Hello() {
    const name = "1234";

    function hiClick() {
        alert("인사 제출");
    }

    return (
        <div>
            <a> { name } Hello</a>
            <form>
                <label htmlFor='hello'>인사</label>
                <br></br>
                <input id = 'hello' type = "text"/>
                <button onClick={hiClick}>제출하기</button>
            </form>
        </div>
    );
}

export default Hello;