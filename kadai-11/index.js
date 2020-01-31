<html>
<head>
<style>
    button {
            font-size: 50px;
    }
</style>
<body>
    <button id="button">おみくじをひく</button>
    <script>
        const button = document.getElementById('button')
        button.addEventListner('click', () => {
            fetch(')