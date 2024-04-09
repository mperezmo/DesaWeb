 
C:\Users\Navegador>git config --global user.email "martin.perezmoreno@alumnos.uai.edu.ar"

C:\Users\Navegador>cd..

C:\Users>cd .\Navegador

C:\Users\Navegador>mkdir ProyectoClase1

C:\Users\Navegador>cd ProyectoClase1

C:\Users\Navegador\ProyectoClase1>echo. >ReadMePerezMoreno

C:\Users\Navegador\ProyectoClase1>git .add
git: '.add' is not a git command. See 'git --help'.

The most similar command is
        add

C:\Users\Navegador\ProyectoClase1>git add .
fatal: not a git repository (or any of the parent directories): .git

C:\Users\Navegador\ProyectoClase1>cd..

C:\Users\Navegador>git clone https://github.com/mperezmo/DevWeb.git
Cloning into 'DevWeb'...
warning: You appear to have cloned an empty repository.

C:\Users\Navegador>cd .\DevWeb

C:\Users\Navegador\DevWeb>echo. >ReadMePerezMoreno

C:\Users\Navegador\DevWeb>git add .

C:\Users\Navegador\DevWeb>git commit -m "Upload ReadMe"
[main (root-commit) 20e09a5] Upload ReadMe
 1 file changed, 1 insertion(+)
 create mode 100644 ReadMePerezMoreno

C:\Users\Navegador\DevWeb>git push
info: please complete authentication in your browser...
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 238 bytes | 238.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/mperezmo/DevWeb.git
 * [new branch]      main -> main