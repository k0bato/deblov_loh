// ==UserScript==
// @name         deblov_loh
// @version      1.0
// @description  deblov_loh
// @author       kobato
// @include      https://vk.com/*
// @include      http://vk.com/*
// @grant        none
// ==/UserScript==
 
var vkIds = []; // Здесь хранятся цифровые или буквенные id страниц, которые нужно игнорировать в конференции
 
var element = document.getElementById('content');
element.addEventListener("DOMNodeInserted", ignoreIt, false);
element.addEventListener("wheel", ignoreIt, false);
 
setInterval(ignoreIt(), 1000);
 
function ignoreIt()
{
    if(window.location.href.indexOf("sel=c1") < 0) // Здесь указывается id конференции 
    {
        return;
    }
 
    for(var i = 0; i < vkIds.length; i++)
    {
        var selector = 'a[href="/' +vkIds[i]+ '"]';
        var spam = document.querySelectorAll(selector);
 
        for(var j = 0; j < spam.length; j++)
        {
            if(spam[j].parentElement.parentElement.parentElement.style.display != 'none')
            {
                spam[j].parentElement.parentElement.parentElement.style.display = 'none';
            }
        }
    }
}