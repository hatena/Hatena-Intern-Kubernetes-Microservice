package web

import (
	"html/template"
	"io"

	echo "github.com/labstack/echo/v4"

	templateAssets "github.com/hatena/Hatena-Intern-2021/services/blog/templates"
)

type renderer struct {
	templates map[string]*template.Template
}

func newRenderer() (*renderer, error) {
	templates := make(map[string]*template.Template)

	wrapper, err := templateAssets.Templates.ReadFile("wrapper.html")
	if err != nil {
		return nil, err
	}
	main := template.Must(template.New("main").Parse(string(wrapper))).Funcs(template.FuncMap{
		"unescapedHTML": func(html string) template.HTML {
			return template.HTML(html)
		},
	})

	dir, err := templateAssets.Templates.ReadDir(".")
	if err != nil {
		return nil, err
	}
	for _, file := range dir {
		fileName := file.Name()
		main := template.Must(main.Clone())
		template, err := main.ParseFS(templateAssets.Templates, fileName)
		if err != nil {
			return nil, err
		}
		templates[fileName] = template
	}

	return &renderer{templates}, nil
}

func (r *renderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	if data == nil {
		data = map[string]interface{}{}
	}
	data.(map[string]interface{})["CsrfToken"] = c.Get("csrf")
	return r.templates[name].ExecuteTemplate(w, "main", data)
}
