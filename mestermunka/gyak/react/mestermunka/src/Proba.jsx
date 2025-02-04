i = 0;
export default function Proba()
{
    while (i < 5) {
        return <form className="item">
        <div class="container">
            <img src="/public/husleves.jpg" alt="Description of Image" class="responsive-image"></img>
            <div class="text-content">
                <h1>Your Title Here</h1>
                <p>Your text content fetched from the database goes here. This can be a description, article, or any other text.</p>
                <button class="action-button">Click Me</button>
            </div>
        </div>
        </form>
    }

    i++
}

