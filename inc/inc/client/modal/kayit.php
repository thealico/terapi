<section class="modal-kayit type-one">
	
	<div class="modal-header">
		<button type="button" class="close prt" data-dismiss="modal">
			<span aria-hidden="true">&times;</span>
			<span class="sr-only">Close</span>
		</button>
		<h4 class="modal-title w85 w100-xs">Yeniben'e Üye Olun</h4>
	</div>

	<div class="modal-body w85 w100-xs">
		<form method="post" name="login" action="" class="form type-3 ls-2">
			
			<?php // mesaj on class eklersen acilir... ?>
			<div class="mesaj ok ">
				<div>
					<span class="mesaj-close prt">&times;</span>
					<p>Başvuru formunuzu aldık. Teşekkürler.</p>
				</div>
			</div>

			<ul class="f1 reset">
				<li class="f2">
					<label class="f3">E-posta adresi</label>
					<div class="f4"><input type="text" name="mail" /></div>
				</li>
				<li class="f2">
					<label class="f3">Sitede görünmesini istediğiniz kullanıcı adınız</label>
					<div class="f4"><input type="text" name="user" /></div>
				</li>
				<li class="f2">
					<label class="f3">Parola</label>
					<div class="f4"><input type="password" name="parola" /></div>
				</li>
				<li class="f2">
					<label class="f3">Bizi nereden duydunuz?</label>
					<div class="f4">
						<span class="dropdown"><i class="icon-down"></i></span>
						<select name="">
							<option><?php echo $c ?></option>
							<option>A</option>
							<option>B</option>
							<option>C</option>
							<option>D</option>
						</select>
					</div>
				</li>
			</ul>

			<nav class="flex between mt25 mb15">
				<input type="submit" value="KAYIT OL" class="buton c-2 h-32 r-4 f-1" />
			</nav>
			
			<blockquote class="reset link-5">
				Yeniben’e üye olarak <a href="">Katılım Şartları</a>’nı kabul etmiş sayılırsınız.<br/>
				Doktor musunuz? <a href="#" class="link-3">Doktorlar İçin</a> sayfamızı ziyaret edin.
			</blockquote>

		</form>
	</div>
	
</section>

