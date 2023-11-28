<template>
    <footer>
        <div class="footer-wrapper">
            <span>WAD 2023</span>
            <span>All rights reserved.</span>
            <ul class="footer-list">
                <li>Joosep Lember</li>
                <li>Nikita Filin</li>
                <li>Johann Mattias Tamm</li>
            </ul>
        </div>
    </footer>
</template>



<style scoped>
    footer{
        height: 90px;
        position: absolute;
        left: 0;
        bottom: 0;
        color: white;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #333333;
    }

    .footer-wrapper{
        width: 1250px;
        display: flex;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .footer-list{
        list-style: none;
    }

    span ~ ul li{
        font-size: 18px;
    }


    @media screen and (max-width: 780px) {
        .footer-wrapper{
            padding-right: 20px;
            padding-left: 20px;

        }
    }
</style>