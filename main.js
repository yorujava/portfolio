//共通ヘッダーフッター読み込み
function writeHeader(){
	$.ajax({
		url:"/include/header.html",
		cache:false,
		async:false,
		success:function(html){
			document.write(html);
		}
	});
}

function writeFooter(){
	$.ajax({
		url:"/include/footer.html",
		cache:false,
		async:false,
		success:function(html){
			document.write(html);
		}
	});
}