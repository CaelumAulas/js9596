import { useState } from 'react';

export default function FormTweet( { addTweetCallback } ) {
    const [tweet, setTweet] = useState('');
    let statusClass = tweet.length > 140 && 'novoTweet__status--invalido';
    let isDisabled = tweet.trim().length < 1 || tweet.length > 140;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTweetCallback(tweet);
        setTweet('');
    }

    return (
        <form onSubmit={ handleFormSubmit } className="novoTweet">
            <div className="novoTweet__editorArea">
                <span className={`novoTweet__status ${statusClass}`}>
                    { tweet.length }/140
                </span>
                <textarea onChange={(e) => setTweet(e.target.value)} value={tweet} className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
            </div>
            <button type="submit" disabled={isDisabled} className="novoTweet__envia">Tweetar</button>
        </form>
    )
}
