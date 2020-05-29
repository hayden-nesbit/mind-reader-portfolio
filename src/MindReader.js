import React, { useState } from 'react'
import './MindReader.css'

function MindReader() {

    const [view, setView] = useState(0)
    const [char, setChar] = useState([])
    const [pick, setPick] = useState("")


    let top1 = "I can read your mind..."
    let top2 = "Pick a number from 01-99"
    let top3 = "Add both digits together to get a new number"
    let top4 = "Subtract your new number from the original number"
    let top5 = "Scroll to find your new number. Note the symbol beside the number"
    let top6 = "Your symbol is..."

    let bott1 = "When you have a number click next."
    let bott2 = "Ex. 13 is 1 + 3 = 4. Click next to proceed."
    let bott3 = "Ex. 13 - 4 = 9. Click next to proceed."

    function handleClick(view) {
        setView(view)
        getChar()
    }


    function getChar() {

        let arr = [];
        let tmpChar = "";
        let char_list1 = "+©¶»%^*?&";
        let rand = Math.floor(Math.random() * char_list1.length);
        let tmpPick = char_list1.charAt(rand);
        let char_list2 = "!@#$⇿∅∇∈⊠";
        for (let i = 0; i <= 99; i++) {
            tmpChar = i + ": ";
            if (i % 9 === 0) {
                tmpChar += tmpPick;
            } else {
                tmpChar += char_list2.charAt(Math.floor(Math.random() * char_list2.length));
            }
            arr.push(tmpChar)
        }

        setChar(arr)
        setPick(tmpPick)

    }


    let charList = char.length > 0 ? char.map((item, index) => {
        return (
            <li key={index}><h2>{item}</h2></li>
        )
    })
        :
        null

    return (

        <div id="image" className="container p-5 mt-4 text-white">
            <div className="row">
                <div id="head" className="col-md-6 offset-3 text-center">
                    <h2>{view === 0 ? top1 : view === 1 ? top2 : view === 2 ? top3 : view === 3 ? top4 : view === 4 ? top5 : view === 5 ? top6 :
                        null}</h2>
                </div>
            </div>

            <div className="row">
                <div id="charList" className="col-md-4 offset-4 text-center mt-2">
                    <ul className="list-unstyled text-center">
                        {view === 4 ? charList : view === 5 ? <h1 className="display-1 mt-5">{pick}</h1> : null}
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 offset-4 text-center">
                    <div className="row">
                        {view === 0 ?
                            <div className="col-md-6 offset-3 text-center">
                                <button onClick={() => setView(1)} type="button" className="btn btn-danger">Go ahead</button>
                            </div>
                            :
                            view === 5 ?
                                <div className="col-md-6 offset-3 text-center">
                                    <button onClick={() => setView(0)} type="button" className="btn btn-secondary">Reset</button>
                                </div>
                                :
                                <>
                                    <div className="col-6 text-center">
                                        <button onClick={() => setView(0)} type="button" className="btn btn-secondary">Reset</button>
                                    </div>
                                    <div className="col-6 text-center">
                                        {view === 3 ?
                                            <button onClick={() => handleClick(4)} type="button" className="btn btn-primary">Next</button>
                                            : view === 4 ?
                                                <button onClick={() => setView(5)} type="button" className="btn btn-danger">Reveal</button>
                                                :
                                                <button onClick={() => setView(view + 1)} type="button" className="btn btn-primary">Next</button>
                                        }
                                    </div>
                                </>
                        }
                    </div>
                    <h6 className="mt-2 text-center">{view === 1 ? bott1 : view === 2 ? bott2 : view === 3 ? bott3 : null}</h6>
                </div>
            </div>
        </div>
    )
}

export default MindReader;