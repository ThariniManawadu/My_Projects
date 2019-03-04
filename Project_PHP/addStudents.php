<?php
  if (isset($_COOKIE['username']))
  {
    $username= $_COOKIE['username'];
    $privilege= $_COOKIE['privilege'];
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
                            </td>
                            <td class="interface_table">
                            <form id="addStudentForm" action="insert.php" method="post">
                                    <table class="interface_table">
                                            <tr class="interface_table">
                                                <td class="interface_table"><span>Student ID</span></td>
                                                <td><input type="text" name="student_id"></td>
                                            </tr>
                                            <tr class="interface_table">
                                                <td class="interface_table"><span>Email</span></td>
                                                <td><input type="email" name="email"></td>
                                            </tr>
                                            <tr class="interface_table">
                                                <td class="interface_table"><span>First Name</span></td>
                                                <td><input type="text" name="fname"></td>
                                            </tr>
                                            <tr class="interface_table">
                                                <td class="interface_table"><span>Last Name</span></td>
                                                <td><input name="lname" type="text"></td>
                                            </tr>
                                            <tr class="interface_table">
                                                <td class="interface_table"><span>Address</span></td>
                                                <td><input name="address" type="text"></td>
                                            </tr>
                                            <tr class="interface_table">
                                                <td class="interface_table"></td>
                                                <td><input class="mediumButton" type="submit" id="addStudent" value="Add Student"></td>
                                            </tr>
                                    </table>
                            </form>
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

<? } else echo "invalid"; ?>
