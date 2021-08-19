<?php 
	
	$set = array(
		'title' => '',
		'class' => 'meet',
		'cat'   => 'meet',
		'sub' 	=> '',
		'mod' 	=> ''
	);

?>

<?php include('../inc/header.php') ?>




<section>
	
	
	<div class="con" data-aos="fade-up">

		<div class="py-50"></div>


	    <ul class="step-view row between ns-sm mt-30 mb-90">
	    	<li class="col on"><b>1.ADIM<s><i>:</i> TERAPİSTİNİ SEÇ</s></b></li>
	    	<li class="col"><b>2.ADIM<s><i>:</i> TERAPİ BİLGİLERİ</s></b></li>
	    	<li class="col"><b>3.ADIM<s><i>:</i> ÖDEME BİLGİLERİ</s></b></li>
	    	<li class="col"><b>4.ADIM<s><i>:</i> ONAY</s></b></li>
	    </ul>



	    <ul class="list-team row-4 gut-2 gut-0-sm row-sm-2  row-ms-1">
	    	<?php for ($i=0; $i < 20 ; $i++): ?>
	    	
	    	<li class="col on">
	    		<div>
	    			
	    			<div>
	    				<span>Online</span>
	    				<h4>Providenci Kerluke</h4>
	    				<s></s>
	    			</div>

	    			<figure>
	    				<img src="<?php echo path('img/sam.jpeg'); ?>" class="real">
	    			</figure>
	    		</div>

	    		<nav>
	    			<a href="#" class="one">Profili Gör</a>
	    			<a href="#" class="two">Randevu Al</a>
	    		</nav>
	    	</li>
	    	<?php endfor ?>
	    </ul>

	    <div class="py-50"></div>

	</div>


</section>


<?php include('../inc/footer.php') ?>