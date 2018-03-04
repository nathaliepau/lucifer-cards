<template>
    <div class="card-container" v-on:click="turnCard" v-bind:class="{ 'show-info': isTurned }" v-on:mouseenter="showClickMessage" v-on:mouseleave="mouseLeaveHandler" v-on:mousemove="transformCard">
        <div class="card" v-bind:style="'backgroundImage:url('+image+')'">
            <div class="container-inside">
                <div class="inside">
                    <div class="inside--text">
                        <h3>{{ title }}</h3>
                    </div>
                </div>
                <div class="back">
                    <div class="inside--text">
                        <h3>
                            {{ title }}
                        </h3>
                        <p>
                            {{ info }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Card.js"></script>
<style src="./Card.css"></style>