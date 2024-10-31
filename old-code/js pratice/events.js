function addEventListener(EventType,fn){
    // browser will update this object whenever there is new event by user
    // event here means like moving a mouse , pressing a key , clicking a button, etc.
    const Event = {
        key: "Enter",
        value : "password",
    }
    if(EventType === "keydown"){
        fn(Event)
    }
};



function main() {
    addEventListener("keydown",function(event){
            console.log(event);
    });
};

main();