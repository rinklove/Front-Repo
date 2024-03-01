const f01 = () => {
    let x = 10;
    console.log(x);
}

// f01();

const f02 = () => {
    const x = `15`;
    console.log(typeof(Number(x)));
    // ==, !=, ===, !==
    if(10 !== `10`) {
        console.log(`이프`);
    } else {
        console.log(`엘스`);
    }
}

f02();