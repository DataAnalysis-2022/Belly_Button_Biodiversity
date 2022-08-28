otu_ids = [1167, 2859, 482, 2264, 41, 1189];
values  = [1, 4, 3, 2, 6, 5];

a = values.indexOf(3);
console.log(a);

reorderArray = otu_ids.sort((a,b)=>{
    var p=otu_ids.indexOf(a);
    var q=otu_ids.indexOf(b);
    //console.log(p);
    if (values[p] > values[q]){
        return 1;
    }
    else if (values[p] < values[q]){
        return -1;
    }
    else{
        return 0;
    }
});

console.log(otu_ids.slice(0,3));
console.log(reorderArray);