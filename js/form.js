var mndFileds=new Array('Last Name');
 	  var fldLangVal=new Array('Last Name');

 	  function checkMandatory() {
		var name='';
		var email='';
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads1166569000000321005'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			  alert(fldLangVal[i] +' cannot be empty'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		 try {
		    if($zoho) {
			var LDTuvidObj = document.forms['WebToLeads1166569000000321005']['LDTuvid'];
			if(LDTuvidObj) {
  	  	 	    LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
			}
			var firstnameObj = document.forms['WebToLeads1166569000000321005']['First Name'];
			if(firstnameObj) {
			     name = firstnameObj.value +' '+name;
			}
			$zoho.salesiq.visitor.name(name);
			var emailObj = document.forms['WebToLeads1166569000000321005']['Email'];
			if(emailObj) {
			     email = emailObj.value;
			     $zoho.salesiq.visitor.email(email);
			}
		    }
		} catch(e) {}
	     }