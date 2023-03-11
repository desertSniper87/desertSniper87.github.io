var tipuesearch = {"pages":[{"title":"CV","text":"Curriculam Vitae of Samidhya Sarker. Download PDF Education Bangladesh University of Engineering and Technology(BUET) Dhaka, Bangladesh M.Sc. in CSE 2018 - Postgraduate Thesis: Detection and Recognition of Asymmetric Cartoon Characters in Visual Media Advisor: Abu Wasif Bangladesh University of Engineering and Technology(BUET) Dhaka, Bangladesh B.Sc. Engineering in CSE 2011 - 2017 Undergraduate Thesis: Efficient Video Transcoding in IaaS Cloud by Using Approximation of Bin-Packing Algorithm in Scheduling. Advisor: Dr. S. M. Farhad Working Experience Bangladesh Computer Council (BCC) ICT Division, Dhaka, Bangladesh Assistant Programmer, CA Operations and Security Dec. 2022 - Currently working as a developer in a Government Autonomous Institution. Working as a frontend (React) developer in Quickpass ios application. Developed the facematching engine requred for class 2 certificate verification using Machine learning and neural networks and Python frameworks. Responsible for DevOps of BCC CA internal servers and database servers. BGD e-Gov CIRT BCC, ICT Division, Dhaka, Bangladesh Quality Assurance (e-Services) Dec. 2019 - Dec. 2022 Worked as a Software developer/tester in a government project under the umbrella of Bangladesh Computer Council (ICT division), Government of Bangladesh. I worked as a consultant in the following development teams: BNDA (Bangladesh National Digital Architecture) Team BCC-CA (BCC Certificate Authority) Dev Team GRP (Government Resource Planning) BCC Team CIRT (Computer Incidence Response Team) General responsibilities: Perform requirement analysis, software specification development, and design software architectures(database, streams etc). Development of web application frontends using Angular framework. Development of full stack web application using Django/Spring MVC framework. Development of web application APIs using django-REST and flask. Perorming integration testing, load testing in for web applications. Provide training to government employees about developed web applications . Concitus Dhaka, Bangladesh Software Engineer Oct. 2018 - April. 2019 Creating healthcare related web applications Using Python, Django, PostgreSQL, Celery, Redis and VueJS. Creating Content Management Systems using Django-Wagtail. Skills Software Engineering Languages: Python, Java, Javascript, C++, C Frameworks: Django(/REST), FastAPI, Angular, React Native, Celery, Spring MVC/Boot Machine Learning/Data Science: Pytorch, Numpy, Pandas, SciPy, Tensorflow Database: MySQL, PostgreSQL, Redis, SQLite, CockroachDB Mark up/down: LaTeX, HTML, Markdown, reStructuredText Func/log prog: Clojure, Haskell, Prolog Testing: JMeter, Gatling, Cypress, Playright/PuppeteerJS Security Testing: Burpsuite, NMap Other: Git/Mercurial, Vim/Intellij, Postman, Arduino, BeautifulSoup, Scrapy, Selenium, jQuery, Ajax Systems Operations / DevOps Deployment: nGinx/Apache/Tomcat Server administration, Kubernetes/Docker/Dokku/Heroku Deployment Virtualbox/VMware/KVM Deployment Load balancing using Haproxy, nGinx Unix/Linux: Distros: Debian(Ubuntu), Centos(Fedora), etc. Shell Scripting, Ansible Certification Level-2 Fundamental Information Technology Engineer(ITFE) ITPEC, JICA, BCC Full Passer October 2018 Projects It-Connect: A helpdesk for aiding ITES development for foreign countries. It is a web system developed under the supervision of WB funded LICT-ITES project. I designed and developed the frontend of UK and Netherland portal using Angular and parts of the monolithic backend using Spring MVC. [https://bhcl.itconnect.gov.bd] GRP: Government Resource Planning application of Government of Bangladesh. I worked at the frontend of the Payment submodule of the HRM module which is responsible for disbursing the salary of GoB employees. [https://grp.gov.bd] HIS: Health Information System application of BCC. I designed and developed the web application using Django, MySQL. [https://his.bcc.gov.bd] e-Recruitment: Recruitment system of BCC. I performed, load/stress testing, automated UI functionality testing, integration testing and server administration. [https://erecruitment.bcc.gov.bd] Boithok: Video conferencing system of ICTD. I performed, load/stress testing, functionality testing of the system and the android application. [https://vc.bcc.gov.bd] Covid19Tracker: Covid19 Tracker application developed by BNDA. I developed the analytics dashboard using d3js. [http://covid19tracker.gov.bd] FPS: Foodgrain Procurement System of Food Department of GoB. I performed load/stress testing, UI testing. [http://fps.dgfood.gov.bd] Communication Skills Bangla: Native Language English: Full Professional Proficiency German: Limited Working Proficiency Co curricular activities 16 times blood donor for Badhan. Volunteer, BUET CSE Festival 2011, 2013, 2015 Inter University Project Show (IUPS) Contributor, Bengali Language Wikipedia [https://bn.wikipedia.org/wiki/User:Desertsniper87] Reference Abu Wasif Assistant Professor ECE Building, Room No. 403, BUET Email: wasif@cse.buet.ac.bd","tags":"CV","url":"https://torsho.me/pages/cv.html","loc":"https://torsho.me/pages/cv.html"},{"title":"Using SNI to run multiple SSL enabled sites in a single webserver.","text":"The Problem Sometimes we want to host multiple sites in the same server to minimize on server costs. We may run applications on different ports or map subdomains to different directories. But if we want to server websites on different domains, we have to take different approaches. Solution: VirtualHosts Virtual hosting is a method for hosting multiple domain names (with separate handling of each name) on a single server (or pool of servers). Suppose, we have two websites having urls: www.example1.com and www.example2.com. For an apache web server, we can put the source of two servers in /var/www/example1 and /var/www/html2. We can then host both of those servers. We can change /etc/httpd/conf/httpd.conf: # Ensure that Apache listens on port 80 Listen 80 <VirtualHost *:80 > DocumentRoot \"/www/example1\" ServerName www.example.com # Other directives here </VirtualHost> <VirtualHost *:80 > DocumentRoot \"/www/example2\" ServerName www.example.org # Other directives here </VirtualHost> Drawbacks of VirtualHosts SSL/TLS is a good way to provide security directly to the end users. If we want to use SSL/TLS encryption on connections using VirtualHosts, another complication arise. If we revisit the SSL/TLS basics and the OSI networking model, the TLS connection happens on layer 4 of the layer. The problem with using named virtual hosts over SSL is that named virtual hosts rely on knowing what hostname is being requested, and the request can't be read until the SSL connection is established. So, VirtualHosts cannot be used in addition to SSL certificates. Common certificate This problem can be solved if we used a common domain. For example we may have a common domain named example.com and have subdomain 1.example.com and 2.example.com. But it is not practical as it hurts SEO score of the two sites. SNI to the rescue Server Name Indication (SNI) is an extension to the Transport Layer Security (TLS) computer networking protocol by which a client indicates which hostname it is attempting to connect to at the start of the handshaking process. In SNI enabled client and servers, the client sends the name of the virtual domain(i.e Virtual Host) as part of the TLS negotiation's ClientHello message. This enables the server to select the correct virtual domain early and present the browser with the certificate containing the correct name. Therefore, with clients and servers that implement SNI, a server with a single IP address can serve a group of domain names for which it is impractical to get a common certificate. Implementation First, we have to check if SNI is supported in web servers. We have to have at least: - Apache 2.2.12 (With OpenSSL 0.9.8f) - Nginx 1.15.9 (With OpenSSl 0.9.8l) Also, client have to support SNI. Mozilla Firefox 2.0 or later Opera 8.0 or later (with TLS 1.1 enabled) Internet Explorer 7.0 or later (on Vista, not XP) Google Chrome Safari 3.2.1 on Mac OS X 10.5.6 Server configuration: Apache Edit /etc/httpd/conf/httpd.conf: # Ensure that Apache listens on port 443 Listen 443 # Listen for virtual host requests on all IP addresses NameVirtualHost *:443 # Go ahead and accept connections for these vhosts # from non-SNI clients SSLStrictSNIVHostCheck off <VirtualHost *:443 > # Because this virtual host is defined first, it will # be used as the default if the hostname is not received # in the SSL handshake, e.g. if the browser doesn't support # SNI. DocumentRoot /www/example1 ServerName www.example.com # Other directives here SSLCertificateFile /etc/ssl/ssl-example1.crt SSLCertificateKeyFile /etc/ssl/ssl-example1.key SSLCertificateChainFile /etc/ssl/ssl-example1.ca-bundle </VirtualHost> <VirtualHost *:443 > DocumentRoot /www/example2 ServerName www.example2.org SSLCertificateFile /etc/ssl/ssl-example2.crt SSLCertificateKeyFile /etc/ssl/ssl-example2.key SSLCertificateChainFile /etc/ssl/ssl-example2.ca-bundle # Other directives here </VirtualHost> Nginx Change /etc/nginx/nginx.conf (Or you can put these code in sites_enabled/site_available): server { root / var / www / example1 ; index index . html index . htm index . nginx - debian . html index . php ; server_name example1 . com ; location / { try_files $ uri$args $ uri$args / / index . html ; } listen 443 ssl ; ssl_certificate / etc / ssl / ssl - example1 . crt ; ssl_certificate_key / etc / ssl / ssl - example1 . key ; include / etc / ssl / ssl - example1 . ca - bundle ; ssl_dhparam / etc / letsencrypt / ssl - dhparams . pem ; # Other directives } server { root / var / www / example1 ; index index . html index . htm index . nginx - debian . html index . php ; server_name example2 . com ; location / { try_files $ uri$args $ uri$args / / index . html ; } listen 443 ssl ; # managed by Certbot ; ssl_certificate / etc / ssl / ssl - example1 . crt ; ssl_certificate_key / etc / ssl / ssl - example1 . key ; include / etc / ssl / ssl - example1 . ca - bundle ; ssl_dhparam / etc / letsencrypt / ssl - dhparams . pem ; # Other directives } Certifiates can be obtained by letsencrypt or zero.ssl or any commercial certificate providers.","tags":"computing","url":"https://torsho.me/sni.html","loc":"https://torsho.me/sni.html"},{"title":"Installing debian mips on qemu","text":"Hi, recently I had to install a little endian machine to test out some old C code for academic ressons. I had choices of using Sun solaris for SPARC workstations or using a mips machine. I went on to install debian wheezy on qemu mips. First download the appropriate vmlinux kernel and harddisk qcow2 image from Aurélien Jarno's ftp site. https://people.debian.org/TLIDEaurel32/qemu/mips/ ./qemu/build/mips-softmmu/qemu-system-mips \\ -m 256 \\ -M malta \\ -kernel vmlinux-3.2.0-4-4kc-malta \\ -hda debian_wheezy_mips_standard.qcow2 \\ -append \"root=/dev/sda1 console=tty0\" \\ -net user,hostfwd = tcp::10022-:22 \\ -net nic sysctl -w net.ipv4.ping_group_range = '0 2147483647' Now you can ssh into qemu. Password is root ssh root@localhost -p 10022","tags":"computing","url":"https://torsho.me/debian-mips-qemu.html","loc":"https://torsho.me/debian-mips-qemu.html"},{"title":"Opening intellij source in vim","text":"/run/current-system/sw/bin/urxvt -e sh -c \"vim --servername \"intellij\" --remote +$LineNumber$ $FilePath$\" $ProjectFileDir$","tags":"computing","url":"https://torsho.me/intellij-vim.html","loc":"https://torsho.me/intellij-vim.html"},{"title":"Ubuntu Linux Server on Virtualbox","text":"Update 2019-04-20 Just use vagrant . === === === === === === I downloaded the ISO, installed it into virtualbox. In ubuntu server, I installed necessary packages like apache2, vim etc using apt. Every virtual machine is by default, connected using NAT virtual netwrking. Here the HOST OS manages the address resolution of the Guest VM. We can change the network to bridged adapter, or, set up port forwarding. To go with the latter approach, In the settings window, go to network tabs. Set up 2 ports: 22 for ssh and 80 for server. You can now ssh into the vm using ssh -p 3022 yourname@127.0.0.1 . You can also use scp to copy your files by scp -r -P 3022 yousite yourname@127.0.0.1:/path/ Access your server in your browser in host OS 127.0.0.1:9980 See also Containers , VPS .","tags":"Computing","url":"https://torsho.me/vbox-srv.html","loc":"https://torsho.me/vbox-srv.html"},{"title":"What I had learnt from SICP.","text":"I wrote this to make a point that, after 33 (1985-2018) years, the book Structure and Implementation of Programming language is still useful for leaning useful programming concepts. From lambda-the-ultimate Programming by poking: why MIT stopped teaching SICP: In 1997, Gerald Sussman and Harold Abelson stopped teaching MIT 6.001. They, felt that the SICP curriculum no longer prepared engineers for what engineering is like today. Sussman said that in the 80s and 90s, engineers built complex systems by combining simple and well-understood parts. The goal of SICP was to provide the abstraction language for reasoning about such systems. Today, this is no longer the case. Sussman pointed out that engineers now routinely write code for complicated hardware that they don't fully understand (and often can't understand because of trade secrecy.) The same is true at the software level. The working examples of this book is written in LISP as Gerald Sussman was one of the creators of SCHEME. This is an important observation after the usage of C, C++, JAVA, Python, Javascript etc in introductory CS courses. I tried to reimplement it using python as I am comfortable using it. Chapter 1-4 : The importance of programming abstraction. From Chapter 1.1 The Elements of Programming , Primitive expressions , which represent the simplest entities the language is concerned with, Means of combination , by which compound elements are built from simpler ones, and Means of abstraction , by which compound elements can be named and manipulated as units. For example, in 2.1.1 Arithmatic Operations for rational numbers , the concept of data abstraction is introduced. class Rational (): def __init__ ( self , n , d ): self . numerator = n self . denominator = d def numer ( x ): return x . numerator def denom ( x ): return x . denominator def make_rat ( n , d ): rat = Rational ( n , d ) return rat def add_rat ( x , y ): print ( x . numerator , y . numerator , x . denominator , y . denominator ) return make_rat ((( numer ( x ) * denom ( y )) + \\ ( numer ( y ) * denom ( x ))), \\ ( denom ( x ) * numer ( y ))) rat1 = make_rat ( 2 , 3 ) rat2 = make_rat ( 4 , 5 ) rat = add_rat ( rat1 , rat2 ) print ( rat . numerator , rat . denominator ) Which yields 22 12 One of the recurring themes of the course is, how complex things can be constructed using simple objects. For example, in LISP, cons creates a pair by taking two arguments. We can implement them using python. class cons : head = None tail = None def __init__ ( self , x , y ): self . head = x self . tail = y def __str__ ( self ): return str ( '[' + str ( self . head ) + ', ' + str ( self . tail ) + ']' ) car returns the first part of the pair and cdr returns the second. def car ( cons ): return cons . head def cdr ( cons ): return cons . tail We can implement a list using the cons construct by merging two cons. class list_ ( cons ): head = None tail = None def __init__ ( self , x ): self . head = x [ 0 ] if ( len ( x ) != 1 ): self . tail = list_ ( x [ 1 :]) So print(list_([1, 2, 3, 4])) returns [1, [2, [3, [4, None]]]] We can do a simple operation like scaling by 10: def scale_list ( l , s ): if l . tail != None : return cons ( car ( l ) * s , scale_list ( cdr ( l ), s )) else : return cons ( l . head * s , None ) So print(scale_list(list_([1, 2, 3, 4]), 10)) returns [10, [20, [30, [40, None]]]] An interesting point is this: We need more abstractions the drown out the complexities in order the design elegant systems. So, we see from our example that, our list has become too complicated to use in real world. So, we introduce iteration (In the book, it has been done using LISP lambda functions) print ( list ( map ( lambda x : x * 10 , [ 1 , 2 , 3 , 4 ]))) [ 10 , 20 , 30 , 40 ] (To be continued)","tags":"Computing","url":"https://torsho.me/sicp.html","loc":"https://torsho.me/sicp.html"}]};