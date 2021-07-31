<?php 
	
	$set = array(
		'title' => '',
		'class' => 'home',
		'cat'   => '',
		'sub' 	=> '',
		'mod' 	=> 'home'
	);

?>

<?php include('../inc/header.php') ?>


<section class="sec-cover">
	<div class="con h">
		<div class="txt flex yc h w-65">
			<div>
				<hgroup class="pb-30">
					<h2>Randevu için beklemeye son!</h2>
					<h3>Terapistini seç, dilediğin zaman gorüşmeye başla.</h3>
				</hgroup>
				<p>Uzmanlarımız ile evinizin rahatlığında konuşun, sorunlarınızı ertelemeyin</p>
				<nav class="row  pt-50">
					<div><a href="#" class="btn b-1">Nasıl Çalışır</a></div>
					<div><a href="#" class="btn b-2">Hemen Başla</a></div>
				</nav>
			</div>
		</div>
	</div>
</section>

<div class="con py-70">

	<section class="sec-team f-1">
		<h4 style="--fs-xs:24px">Alanında uzman psikologlarımız daima sizinle</h4>
		<ul class="row-4 row-md-3 row-xs-2 row-ms-1 gut-1 gut-0-xs g pt-70 pb-95">
			<li class="col"><a href="#">Çift, Evlilik ve Aile Danişmanlığı</a></li>
			<li class="col"><a href="#">Çocuk Danışmanlığı</a></li>
			<li class="col"><a href="#">Ergenlik Danışmanlığı</a></li>
			<li class="col"><a href="#">Bireysel Danışmanlık</a></li>
			<li class="col"><a href="#">Beslenme Danışmanlığı</a></li>
			<li class="col"><a href="#">Yas Danışmanlığı</a></li>
			<li class="col"><a href="#">Cinsel Terapi</a></li>
			<li class="col"><a href="#">Bağımlılıklar </a></li>
		</ul>
	</section>


	<section class="sec-team f-2">
		<ul class="row-3 gut-2 c-mask-ratio crop">
			<?php for ($i=0; $i < 6 ; $i++): ?>
			<li class="col">
				<div>
					<hgroup>
						<h3>Uzm. Klinik Psikolog </h3>
						<h4>Meliha Çimen</h4>
					</hgroup>
					<figure class="w-70 mt-30 mb-10 cm">
						<img src="<?php echo path('img/4.4.png'); ?>" class="mask" />
						<img src="<?php echo path('img/bos.png'); ?>" class="real" />
					</figure>
					
					<span class="connect of"><i class="ss-gizmo ss-ban"></i>ÇEVRİM DIŞI</span>
					
					<nav class="row center">
						<a href="#" class="btn b-1 e-view">Profili İncele</a>
						<a href="#" class="btn b-2 e-live">Hemen Başla</a>
					</nav>

				</div>
			</li>
			<?php endfor ?>
		</ul>
	</section>

</div>


<section class="sec-post mt-90 py-90 f-1">
	<div class="con txt-c">

		<h3 class="mb-80">Psikolojik hastalıklar </h3>

		<div class="c-mask-ratio row-2 gut-2 crop">
			<article class="col">
				<a href="#">
					<figure>
						<img src="<?php echo path('img/16.9.png'); ?>" class="mask" />
						<img src="<?php echo path('img/bos.16.9.png'); ?>" class="real" />
					</figure>
					<h4 class="w-80 cm">Neden Hep Yanlış İnsanlara  Aşık Oluyorum?</h4>
				</a>
			</article>

			<article class="col">
				<a href="#">
					<figure>
						<img src="<?php echo path('img/16.9.png'); ?>" class="mask" />
						<img src="<?php echo path('img/bos.16.9.png'); ?>" class="real" />
					</figure>
					<h4 class="w-80 cm">Neden Hep Yanlış İnsanlara  Aşık Oluyorum?</h4>
				</a>
			</article>
		</div>

		<span class="flex mc mt-80">
			<a href="#" class="btn b-2">Tüm Makaleler</a>
		</span>

	</div>
</section>




<?php include('../inc/footer.php') ?>