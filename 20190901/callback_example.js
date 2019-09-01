func1(function(err1) {
    if (err1) {
        console.error(err1);
        return;
    } func2(function(err2) {
        if (err2) {
            console.error(err2);
            return;
        } func3(function(err3) {
            if (err3) {
                console.error(err3);
                return;
            } func4(function(err4) {
                if (err4) {
                    console.error(err4);
                    return;
                } func5();
            });
        });
    });
});
