import { Component, Directive } from 'angular2/core';
import {ControlGroup} from 'angular2/common';
@Component({
 selector: 'About',
 templateUrl: 'app/about/about.html'
})
export class AboutComponent { 


	  constructor() {

			$("#text_slider div:gt(0)").hide();

		        setInterval(function() {
		            $('#text_slider div:first')
		            .fadeOut(500).next().fadeIn(1000).end().appendTo('#text_slider');
		        }, 3000);
    }
}