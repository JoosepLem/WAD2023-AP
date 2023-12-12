<template>
    <header>
        <div class="header-wrapper">
            <ul class="menu">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li> | </li>
                <li>
                  <router-link to="/contacts">Contacts</router-link>
                </li>
            </ul>
<!--            <div class="img">-->
<!--                <img id="profileIcon" ref="profileIcon" src="@/assets/profileIcon.png" alt="profile icon" @click="toggleDropdown" />-->
<!--             </div>-->
<!--            <div id="dropDownMenu" v-show="isDropdownVisible" ref="dropDownMenu">-->
<!--                <ul>-->
<!--                    <li>Heli Kopter</li>-->
<!--                    <li>helikopter@gmail.com</li>-->
<!--                    <li>Logout</li>-->
<!--                </ul>-->
<!--            </div>-->
        </div>
    </header>
</template>


<script>
    export default {
        data() {
            return {
                isDropdownVisible: false,
                dropDownMenuId: 'dropDownMenu',
                profileIconId: 'profileIcon',
            };
        },
        
        mounted() {
            document.addEventListener("click", this.closeDropdownOnClickOutside);
        },

        methods: {
            toggleDropdown() {
                this.isDropdownVisible = !this.isDropdownVisible;
            },

            closeDropdownOnClickOutside(event) {
                if (
                    this.isDropdownVisible &&
                    !(document.getElementById(this.profileIconId).contains(event.target)) &&
                    !(document.getElementById(this.dropDownMenuId).contains(event.target))
                ) {
                    this.isDropdownVisible = false;
                }
            },
        },
    };
</script>


  <style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        position: relative;
        min-height: 100%;
    }

    body {
        margin: 0 0 100px;
        bottom: 70px;
        font-family: 'Times New Roman', Times, serif, monospace;
        background-color: #f2f2f2;
    }

    header{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #333333;
    }

    .header-wrapper{
        width: 1602px;
        display: flex;
        /*justify-content: space-between;*/
        justify-content: center;
        height: 70px;
        align-items: center;
        position: relative;
    }

    li > a{
        transition: .5s;
        padding: 4px;
        border-radius: 5px;
    }

    li {
        font-size: 30px;
        color: white;
    }

    li a:hover{
        background-color: goldenrod;
    }

    #profileIcon{
        min-width: 45px;
        max-height: 55px;
    }

    .menu{
        list-style: none;
        display: flex;
        gap: 20px;
        padding-left: 10px;
    }

    .img{
        padding-right: 10px;
    }

    .menu li a{
        text-decoration: none;
        color: white;
        font-size: 24px;
    }

    #dropDownMenu {
        position: absolute;
        top: 100%;
        right: 0;
        padding: 10px;
        background-color: white;
        border: 1px solid #ccc;
        z-index: 1;
        border-radius: 10px;
    }
  
    #dropDownMenu ul {
        list-style: none;
    }
    
    #dropDownMenu ul li {
        margin-bottom: 2px;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 780px) {
        .header-wrapper{
            padding-right: 20px;
            padding-left: 20px;
        }
    }

    @media only screen and (min-width: 1024px) and (max-width: 1920px)  {
        .header-wrapper{
            margin-left: 90px;
            margin-right: 90px;
        }
        #dropDownMenu{
            right: -40px;
        }
    }

    @media only screen and (min-width: 1920px) {
        #dropDownMenu{
            right: -40px;
        }
    }
  </style>