function recursiva(max) {
    console.log(max)
    if(max >= 11301) return;
    max ++;
    recursiva(max);
}

recursiva(0);