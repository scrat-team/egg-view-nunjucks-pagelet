{% html lang="zh-CN" %}
  {% head %}
  <link rel="icon" href="/public/v/layout/favicon.ico"/>
  {% title %}{{ title }}{% endtitle %}

    {# 引用模块 #}
    {% require $id="view/lib/md.js" %}
    {% require $id="view/lib/pagelet/pagelet.js" %}
    {% require $id="view/lib/pagelet/pagelet-cache.js" %}

    <script>
      // 头部资源加载时间
      window._headTime = new Date().getTime() - startTime;
    </script>
    {% endhead %}

  {% body %}
<div class="layout">
  {% block body %}
    {# 用于继承的block区域 #}
  {% endblock %}
</div>
{% endbody %}
{% endhtml %}
