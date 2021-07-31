fs.refresh = true;

let refresh;

function pull_refresh(){
	
	refresh = PullToRefresh.init({
		mainElement: 'body',
		triggerElement: '#reload',
		onRefresh() {
			
			if(fs.refresh) {
				$('html').addClass('query');
				window.location.reload();
			}
		}
	});
}

function _pb_destory() { 
	
	refresh.destroy();
}


