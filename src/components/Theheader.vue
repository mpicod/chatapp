<template>
    <header>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        padding: 10px 0;
        z-index: 9;

        background-color: #F6F6F6;
        color: white;
        font-weight: 600;
        border-top-right-radius: 25px;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        width: 100px;
        padding: 10px;
        span{
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
        span:not(:first-child){
            border-radius: 50%;
        }
        span:first-child{
            border-radius: 0 99px 99px 99px;
            background-color: black;
        }
        span:nth-child(2){
            border-left:8px solid black;
            border-right:8px solid white;

            border-radius: 99px;
            width: 0;
            height: 15px;
        }
        span:last-child{
            border-radius: 999px;
            background-color: white;
        }
    }
</style>
