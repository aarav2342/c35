class Player {
    constructor(){

    }
    getCount(){
        var pcr=database.ref("playerCount");
        pcr.on("value",function(data){
            playerCount=data.val();

        });

    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var Playeri="player"+playerCount;
        database.ref(Playeri).set({
            name:name
        })

    }
}