
<?php
 if (isset($_COOKIE['username']) && $_COOKIE['privilege']=="administrator")
 {
  $username= $_COOKIE['username'];
  $privilege= $_COOKIE['privilege'];
  $password= $_COOKIE['password'];
?>

<html>
    <head>
      <title>Add Student</title>
      <link rel="stylesheet" type="text/css" href="CSS/style.css">
    </head>
  
    <body>
  
      <div class="center">
        <header>SIT780 - Enterprise Applications Development</header>
      </div>
  
        <div class="page-wrap">
            <article role="main">
                <div class="sub_catergories">
                    <div class="application">
                        <table class="interface_table">
                            <tr class="interface_table">
                            <td class="interface_table">
                                <h1>Welcome <? echo($username)?></h1>
                                <h2>You are now logged in</br> under <?echo  $privilege?> privilege.</h2></br>
                                <a class="lnk-menu" href=index.html>LOGOUT</a></br></br>
                                <div class="btn-group-vertical" role="group" aria-label="...">
                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default"><?echo("<a class=lnk-menu href=displayStudents.php>Display Student Data</a>");?></button>
                                    </div>
                                    <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default"><?echo("<a class=lnk-menu href=displayEnvironmental.php>View Environmental Data</a>");?></button>
                                    <?if($privilege == administrator)echo("<div class=btn-group role=group><button type=button class=btn btn-default><a class=lnk-menu href=addStudents.php>Add Students</a></button></div>");?>
                                </div>
                                </br></br>
                                <div class="search">
                                <table>
                                    <form name="search" action="search.php">
                                    <tr><span>First Name</span></br><input type="text" name="searchFN"></tr></br>
                                    <tr><span>Last Name</span></br><input type="text" name="searchLN"></tr></br></br>
                                    <input class="mediumButton" type="submit" value="Search">
                                    </form>
                                </table>
                                </div>
                                </br></br>
                                <div class="search">
                                <table>
                                    <form name="search" action="search.php">
                                    <tr><span>First Name</span></br><input type="text" name="searchFN"></tr></br>
                                    <tr><span>Last Name</span></br><input type="text" name="searchLN"></tr></br></br>
                                    <input class="mediumButton" type="submit" value="Search">
                                    </form>
                                </table>
                                </div>
                            </td>
                            <td class="interface_table">
                            <?
                            if ($student_id == "" || $email == "" || $fname == "" || $lname == "" || $address == "") {
                                echo "<h3>Enter Details Correctly</font><h3>";
                                echo "<button onclick='window.history.back()'>Go Back</button>";
                            } else {
                            $file = "students.xml";
                            $fp = fopen($file, "rb");
                            $string = fread($fp, filesize($file));
                            $xml = new DOMDocument();
                            $xml->formatOutput = true;
                            $xml->preserveWhiteSpace = false;
                            $xml->loadXML($string);

                            $root = $xml->documentElement;

                            $count = 0;
                            $xmlfile = simplexml_load_file($file);
                            foreach ($xmlfile->children() as $students => $data) {
                                $count = $count + 1;
                            }

                            $ori = $root->childNodes->item($count);
 
                            $id = $xml->createElement("student_id");
                            $id_text = $xml->createTextNode($student_id);
                            $id->setAttribute("email", $email);
                            $id->appendChild($id_text);


                            $f_name = $xml->createElement("lastname");
                            $fn_text = $xml->createTextNode($fname);
                            $f_name->appendChild($fn_text);


                            $l_name = $xml->createElement("firstname");
                            $ln_text = $xml->createTextNode($lname);
                            $l_name->appendChild($ln_text);

                            $adr = $xml->createElement("address");
                            $addr_text = $xml->createTextNode($address);
                            $adr->appendChild($addr_text);


                            $student = $xml->createElement("student");
                            $student->appendChild($id);
                            $student->appendChild($f_name);
                            $student->appendChild($l_name);
                            $student->appendChild($adr);

                            $root->insertBefore($student, $ori);
                            $xml->save("students.xml")

                         ?>

                        <h2>You have successfully added a student.</font></h2>
                        <a href="addStudents.php">Add</a>
                        <?}
                    }
                    ?>
                        </td>
                    </tr>
                    </table>

                    </div>
                    
               
                </div>
            </article>
        </div>
        <div class="center">
                <footer>Tharini Hasara Manawadu De Silva SID: 217336638 <br> Copyright &copy 2018 All Right Reserved.</footer>
        </div>
    </body>
</html>