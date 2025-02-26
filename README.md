
### Expected work flow
	1. Choose a task 
	2. Create a branch refering to feature (camelCase)
	3. Push branch into remote
	4. Update xlsx status
	5. Wait for feedback
	6. Fix based on feedback
	7. Rebase project onto main branch [how?](https://www.youtube.com/watch?v=f1wnYdLEpgI&t=323s)

### Setup Steps 


### 1. Clone the Repository

  

```bash

git  clone  https://github.com/your-username/your-repo-name.git

cd  your-repo-name

```

### 2. Clone the Repository
Navigate to the frontend directory and install the required npm packages:

```bash

cd frontend

npm install
```
### 3. Install Backend Dependencies

Navigate to the backend dir and install the reqiured Python Packages:
```bash
cd ../back
pip install -r requirements.txt
```

### Running servers
To start the backend run 
```bash
uvicorn main:app --reload
```
To start the frontend run
```bash
npm run dev
```

### Common mistakes
- Running the commands inside the wrong directory  
- Always pull before starting to code and before commiting a change

### Basic commands
- git checkout (branch name) --> Changes branch
- git checkout -b "branch name" --> Creates branch
- git branch -D "branch name" --> Deletes local branch
- git add "src" --> Stages changes
- git commit -m "commit message" --> commits changes
- git pull --> updates branch changes
- git push --> pushes changes into remote branch
- git stash --> removes changes and saves them
- git stash pop --> returns removed changes
- git merge "from branch" "to branch"

 