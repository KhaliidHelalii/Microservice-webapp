$('.fa-plus-square').click(e => {
    let counter = $(".counter").html();
    let price = $("#price").html()
    counter++
    // let newPrice = parseFloat(price) + parseFloat(price)
    // console.log(newPrice)
    console.log(counter)
    $(".counter").html(counter)
        // $("#price").html(newPrice + "$")
})

$('.fa-minus-square').click(e => {
    let counter = $(".counter").html();
    counter--
    if (counter <= 0) {
        $(".counter").html(0)
    } else {
        $(".counter").html(counter)
    }
})